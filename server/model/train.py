from transformers import BertTokenizer, BertForTokenClassification, Trainer, TrainingArguments


import torch
from torch.utils.data import DataLoader, Dataset

dataset = [
    {
        "text": "John Doe worked in the sales department.",
        "labels": [(0, 8, "PERSON")]
    },
    {
        "text": "Jane Smith's gross pay is $5000.",
        "labels": [(0, 10, "PERSON")]
    }
]

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForTokenClassification.from_pretrained('bert-base-uncased', num_labels=2)

# def tokenize_and_align_labels(texts, labels):
#     tokenized_inputs = tokenizer(texts, padding=True, truncation=True, return_tensors='pt')
#     label_ids = []

#     for index, label in enumerate(labels):
#         word_ids = tokenized_inputs.word_ids(batch_index=index)
#         label_ids.append([label[word_idx] if word_idx is not None else -100 for word_idx in word_ids])

#     return tokenized_inputs, torch.tensor(label_ids)



class CustomDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, index):
        text = self.texts[index]
        labels = self.labels[index]
        
        encoding = self.tokenizer(
            text,
            add_special_tokens=True,
            max_length=self.max_len,
            return_tensors='pt',
            padding='max_length',
            truncation=True
        )

        input_ids = encoding['input_ids'].squeeze()
        attention_mask = encoding['attention_mask'].squeeze()

        # Convert labels to tensor
        label_ids = [-100] * self.max_len
        for start, end, label in labels:
            for i in range(start, end):
                label_ids[i] = 1  # or another label index based on your label encoding

        return {
            'input_ids': input_ids,
            'attention_mask': attention_mask,
            'labels': torch.tensor(label_ids, dtype=torch.long)
        }


texts = [item['text'] for item in dataset]
labels = [item['labels'] for item in dataset]

max_len = 128  
train_dataset = CustomDataset(texts, labels, tokenizer, max_len)

training_args = TrainingArguments(
    output_dir='./',
    num_train_epochs=3,
    per_device_train_batch_size=4,
    logging_dir='./logs',
    logging_steps=10,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
)

trainer.train()
