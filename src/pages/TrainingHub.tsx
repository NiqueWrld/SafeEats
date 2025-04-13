import React, { useState } from 'react';
import { BookOpen, CheckCircle, PlayCircle, Award } from 'lucide-react';

export default function TrainingHub() {
  const [currentModule, setCurrentModule] = useState(1);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const modules = [
    {
      id: 1,
      title: 'Food Safety Basics',
      duration: '30 mins',
      completed: true,
    },
    {
      id: 2,
      title: 'Hygiene Standards',
      duration: '45 mins',
      completed: false,
    },
    {
      id: 3,
      title: 'Temperature Control',
      duration: '25 mins',
      completed: false,
    },
  ];

  const quizQuestions = [
    {
      question: 'What is the safe temperature range for storing cold food?',
      options: ['0-5°C', '10-15°C', '15-20°C', '20-25°C'],
      correct: 0,
    },
    {
      question: 'How often should you wash your hands during food preparation?',
      options: [
        'Only before starting',
        'Every hour',
        'After each task and handling raw food',
        'Once per day',
      ],
      correct: 2,
    },
    {
      question: 'Which of these is a critical control point in food safety?',
      options: [
        'Food storage temperature',
        'Food color',
        'Food packaging design',
        'Food serving time',
      ],
      correct: 0,
    },
  ];

  const handleAnswerSubmit = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizStarted(false);
      setCurrentQuestion(0);
      // Show completion message or certificate
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Training Hub</h1>
        <p className="mt-2 text-gray-600">Enhance your food safety knowledge and skills</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Module List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Training Modules</h2>
            <div className="space-y-4">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className={`p-4 rounded-lg border ${
                    currentModule === module.id ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <h3 className="ml-2 text-lg font-medium text-gray-900">{module.title}</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-4">{module.duration}</span>
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <PlayCircle
                          className="h-5 w-5 text-gray-400 cursor-pointer hover:text-green-600"
                          onClick={() => setCurrentModule(module.id)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Knowledge Check</h2>
            <Award className="h-6 w-6 text-green-600" />
          </div>

          {!quizStarted ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Test your knowledge with our food safety quiz</p>
              <button
                onClick={() => setQuizStarted(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Start Quiz
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </h3>
              <p className="text-gray-700">{quizQuestions[currentQuestion].question}</p>
              <div className="space-y-2">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSubmit(index)}
                    className="w-full text-left p-3 rounded-md border border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!quizStarted && score > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <p className="text-green-800">
                Quiz completed! Score: {score}/{quizQuestions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}