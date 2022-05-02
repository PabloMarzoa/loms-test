import {Injectable} from "@angular/core";
import {Question, QuestionsTypes} from "../models/question";

@Injectable({providedIn: 'root'})
export class QuestionsDataService {
  private stringQuestions: Question[] = [
    {
      question: 'What nationality was Chopin?',
      value: 'Polish',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Who painted the Mona Lisa?',
      value: 'Da Vinci',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
      value: 'Shakespeare',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Which river passes through Madrid?',
      value: 'Manzanares',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Which is the most spoken language?',
      value: 'Chinese',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'What does the roman numeral C represent?',
      value: '100',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'What temperature does water boil at?',
      value: '100',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'What\'s the name of the famous big clock in London?',
      value: 'Big Ben',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Who was the first president of America?',
      value: 'Washington',
      response: null,
      type: QuestionsTypes.String
    },
    {
      question: 'Who said, "Vini, vidi, vici"?',
      value: 'Caesar',
      response: null,
      type: QuestionsTypes.String
    }
  ];
  private dateQuestions: Question[] = [
    {
      question: 'When was Elvis\' first ever concert?',
      value: '1954',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'What year did Elvis Presley die?',
      value: '1977',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'When did the first man go into space?',
      value: '1961',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'What year did the Spanish Civil War end?',
      value: '1939',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'When did the American Civil War end?',
      value: '1865',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'What year did the drummer of Def Lepperd loose his arm?',
      value: '1984',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'What year did Christopher Columbus go to America?',
      value: '1492',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'What year did King Juan Carlos get married?',
      value: '1962',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'When did the Americans leave Vietnam?',
      value: '1973',
      type: QuestionsTypes.Date,
      response: null
    },
    {
      question: 'When was President Kennedy killed?',
      value: '1963',
      type: QuestionsTypes.Date,
      response: null
    }
  ];
  private enumQuestions: Question[] = [
    {
      question: 'Who lived at 221B, Baker Street, London?',
      value: 'Sherlock Holmes',
      options: ['Sherlock Holmes', 'Frank Sinatra', 'Harry Potter'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'Which actor plays the T-800 in the first Terminator movie?',
      value: 'Arnold Schwarzenegger',
      options: ['Arnold Schwarzenegger', 'Arnold Swarzeneger', 'Arnold Swarzenegger'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'In what language does "obrigado" mean "thank you"?',
      value: 'Portuguese',
      options: ['Portuguese', 'Chinese', 'Spanish'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'Which is the only mammal that can\'t jump?',
      value: 'Elephant',
      options: ['Elephant', 'Dog', 'Cat'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'How many legs has a spider got?',
      value: '8',
      options: ['8', '6', '4'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'How many colours are there in a rainbow?',
      value: '7',
      options: ['8', '7', '6'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'What horoscope sign has a crab?',
      value: 'Cancer',
      options: ['Cancer', 'Leo', 'Aries'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'What are the five colours of the Olympic rings?',
      value: 'Red, yellow, green, blue, black',
      options: ['Red, yellow, green, blue, black', 'Red, yellow, green, blue, orange', 'Red, yellow, green, blue, brown'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'How many players are there in a basketball team?',
      value: '5',
      options: ['5', '6', '7'],
      response: null,
      type: QuestionsTypes.Enum
    },
    {
      question: 'How many states are there in the United States of America?',
      value: '50',
      options: ['47', '50', '51'],
      response: null,
      type: QuestionsTypes.Enum
    }
  ];

  public getQuestion(index: number, type: number): Question {
    switch (type) {
      case 0: {
        return this.stringQuestions[index];
      }
      case 1: {
        return this.dateQuestions[index];
      }
      case 2: {
        return this.enumQuestions[index];
      }
      default: {
        return this.stringQuestions[index];
      }
    }
  }
}
