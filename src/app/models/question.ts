export interface Question {
  question: string,         // Question
  type: QuestionsTypes,     // Question type
  options?: string[],       // Options if question has Enum type
  value: string,            // Correct answer
  response: string | null   // User response
}

export enum QuestionsTypes {
  String,
  Date,
  Enum
}
