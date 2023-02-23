const { Model } = require('objection');

class Question extends Model {
  static get tableName() {
    return 'questions';
  }

  static get relationMappings() {
    const Answer = require('./Answer.model');

    return {
      answers: {
        relation: Model.HasManyRelation,
        modelClass: Answer,
        join: {
          from: 'questions.id',
          to: 'answers.question_id',
        },
      },
    };
  }
}

module.exports = Question;
