const { Model } = require('objection');

class Answer extends Model {
  static get tableName() {
    return 'answers';
  }

  static get relationMappings() {
    const Question = require('./Question.models');

    return {
      question: {
        relation: Model.BelongsToOneRelation,
        modelClass: Question,
        join: {
          from: 'answers.question_id',
          to: 'questions.id'
        }
      }
    };
  }
}

module.exports = Answer;