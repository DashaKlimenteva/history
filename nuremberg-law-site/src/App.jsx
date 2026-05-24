import { useMemo, useState } from "react";
import "./App.css";

const sections = [
  {
    id: 1,
    title: "Что такое Нюрнбергский процесс?",
    icon: "⚖️",
    text:
        "Нюрнбергский процесс — это международный суд над главными нацистскими преступниками после Второй мировой войны. Он проходил в 1945–1946 годах в немецком городе Нюрнберге.",
    detail:
        "Его значение не только историческое, но и правовое: процесс показал, что международные преступления могут рассматриваться не внутри одной страны, а на международном уровне.",
  },
  {
    id: 2,
    title: "Как работал трибунал?",
    icon: "🏛️",
    text:
        "Суд был создан четырьмя державами-победительницами: СССР, США, Великобританией и Францией. Представители этих стран участвовали в суде как судьи и обвинители.",
    detail:
        "На процессе использовали документы, свидетельства очевидцев, кинохронику и другие доказательства. Это был открытый суд, а не просто наказание без разбирательства.",
  },
  {
    id: 3,
    title: "Главные обвинения",
    icon: "📄",
    text:
        "Обвиняемым предъявили обвинения в преступлениях против мира, военных преступлениях, преступлениях против человечности и участии в заговоре.",
    detail:
        "Особенно важным стало понятие «преступления против человечности». Оно показало, что массовые убийства и преследования мирного населения касаются всего человечества.",
  },
  {
    id: 4,
    title: "Личная ответственность",
    icon: "👤",
    text:
        "До Нюрнберга ответственность чаще связывали с государством. После процесса стало ясно, что за международные преступления отвечают конкретные люди.",
    detail:
        "Политики, военные командиры и чиновники не могут полностью скрыться за государством или должностью. Это стало важной идеей международного права.",
  },
  {
    id: 5,
    title: "Приказ не всегда оправдывает",
    icon: "🚫",
    text:
        "Один из важных выводов Нюрнберга: фраза «я просто выполнял приказ» не всегда освобождает человека от ответственности.",
    detail:
        "Если приказ был явно преступным, исполнитель тоже может быть виновен. Это показывает, что личный выбор и ответственность остаются даже в условиях подчинения.",
  },
  {
    id: 6,
    title: "Наследие Нюрнберга",
    icon: "🌍",
    text:
        "Идеи Нюрнбергского процесса повлияли на развитие международного права и на создание современных международных судов.",
    detail:
        "Главная идея наследия Нюрнберга: даже самые высокопоставленные люди не должны быть выше закона, если они причастны к тяжёлым международным преступлениям.",
  },
];

const principles = [
  {
    title: "Личная ответственность",
    icon: "👤",
    text:
        "За преступления может отвечать не только государство, но и конкретный человек.",
  },
  {
    title: "Преступления против человечности",
    icon: "🌍",
    text:
        "Массовые преступления против мирных людей считаются проблемой всего человечества.",
  },
  {
    title: "Преступный приказ",
    icon: "🚫",
    text:
        "Исполнение приказа не всегда освобождает от ответственности, если приказ был явно преступным.",
  },
  {
    title: "Международный суд",
    icon: "🏛️",
    text:
        "Тяжёлые международные преступления могут рассматриваться не только национальными судами.",
  },
];

const timeline = [
  {
    year: "1945",
    title: "Начало процесса",
    text: "В Нюрнберге начался суд над главными нацистскими преступниками.",
  },
  {
    year: "1946",
    title: "Приговор",
    text: "Трибунал вынес приговоры и закрепил важные правовые идеи.",
  },
  {
    year: "После 1946",
    title: "Нюрнбергские принципы",
    text: "Идеи процесса стали основой для дальнейшего развития международного права.",
  },
  {
    year: "Сегодня",
    title: "Современное значение",
    text: "Принципы ответственности за международные преступления используются в современной правовой практике.",
  },
];

const modernLinks = [
  {
    title: "Международные трибуналы",
    text:
        "После Нюрнберга идея международного суда применялась в других исторических ситуациях.",
  },
  {
    title: "Права человека",
    text:
        "Процесс усилил понимание того, что массовые преступления против людей нельзя считать только внутренним делом государства.",
  },
  {
    title: "Ответственность лидеров",
    text:
        "Нюрнберг показал, что высокий статус не должен защищать человека от суда.",
  },
];

const quiz = [
  {
    question: "Что стало одним из главных итогов Нюрнбергского процесса?",
    options: [
      "Побеждённые страны больше не могли иметь армию",
      "Люди могут нести личную ответственность за международные преступления",
      "Все войны были полностью запрещены",
    ],
    correct: 1,
    explain:
        "Нюрнберг закрепил идею, что за международные преступления могут отвечать конкретные люди, а не только государства.",
  },
  {
    question: "Что означает принцип «приказ не всегда оправдывает»?",
    options: [
      "Любой приказ можно не выполнять",
      "Если приказ преступный, исполнитель может быть ответственным",
      "Ответственность всегда несёт только начальник",
    ],
    correct: 1,
    explain:
        "Если человек выполнял явно преступный приказ, он не всегда может оправдаться тем, что просто подчинялся.",
  },
  {
    question: "Почему Нюрнберг важен для современного права?",
    options: [
      "Он показал, что международные преступления можно рассматривать в суде",
      "Он отменил все национальные законы",
      "Он был обычным немецким судом",
    ],
    correct: 0,
    explain:
        "Процесс стал примером того, что тяжёлые преступления могут рассматриваться на международном уровне.",
  },
  {
    question: "Что такое преступления против человечности в контексте проекта?",
    options: [
      "Любые нарушения школьных правил",
      "Массовые преступления против мирного населения",
      "Только преступления против армии",
    ],
    correct: 1,
    explain:
        "Преступления против человечности связаны с массовыми преследованиями, убийствами и насилием против мирных людей.",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(answers).length;

  const progress = useMemo(() => {
    return Math.round((answeredCount / quiz.length) * 100);
  }, [answeredCount]);

  const score = quiz.reduce((total, item, index) => {
    return answers[index] === item.correct ? total + 1 : total;
  }, 0);

  function handleAnswer(questionIndex, optionIndex) {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  }

  function resetQuiz() {
    setAnswers({});
    setShowResult(false);
  }

  function getResultText() {
    if (score === quiz.length) {
      return "Отлично! Ты хорошо понял главные идеи Нюрнбергского процесса.";
    }

    if (score >= 2) {
      return "Хороший результат. Основные идеи понятны, но некоторые детали можно повторить.";
    }

    return "Стоит ещё раз прочитать разделы сайта и пройти тест повторно.";
  }

  return (
      <div className="app">
        <header className="hero">
          <div className="hero-content">
            <h1>От Нюрнберга к современному праву</h1>
            <p className="hero-text">
              Интерактивный сайт о том, как Нюрнбергский процесс изменил
              международное право и почему его значение сохраняется сегодня.
            </p>

            <div className="hero-actions">
              <a href="#learn" className="primary-link">
                Начать изучение
              </a>
              <a href="#quiz" className="secondary-link">
                Перейти к тесту
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="interactive-section" id="learn">
            <div className="section-heading">
              <p className="eyebrow">Интерактивный блок</p>
              <h2>Изучи тему по шагам</h2>
              <p className="section-description">
                Нажимай на карточки слева, чтобы узнать, как Нюрнбергский процесс
                повлиял на право.
              </p>
            </div>

            <div className="content-grid">
              <div className="tabs">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={
                          activeSection.id === section.id ? "tab active" : "tab"
                        }
                        onClick={() => setActiveSection(section)}
                    >
                      <span>{section.icon}</span>
                      {section.title}
                    </button>
                ))}
              </div>

              <div className="info-card">
                <div className="big-icon">{activeSection.icon}</div>
                <h3>{activeSection.title}</h3>
                <p>{activeSection.text}</p>
                <p className="detail">{activeSection.detail}</p>
              </div>
            </div>
          </section>

          <section className="principles-section">
            <div className="section-heading">
              <p className="eyebrow">Главные идеи</p>
              <h2>Правовые принципы, которые помогает понять сайт</h2>
            </div>

            <div className="principles-grid">
              {principles.map((principle) => (
                  <div className="principle-card" key={principle.title}>
                    <span>{principle.icon}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
              ))}
            </div>
          </section>

          <section className="compare-section">
            <div className="section-heading">
              <p className="eyebrow">Сравнение</p>
              <h2>Было / стало</h2>
            </div>

            <div className="compare-grid">
              <div className="compare-card before">
                <h3>До Нюрнберга</h3>
                <ul>
                  <li>Международное право было менее развитым.</li>
                  <li>Главная ответственность часто связывалась с государством.</li>
                  <li>Понятие преступлений против человечности не было таким ясным.</li>
                  <li>Оправдание приказом воспринималось сильнее.</li>
                </ul>
              </div>

              <div className="compare-card after">
                <h3>После Нюрнберга</h3>
                <ul>
                  <li>Появилась идея личной ответственности за международные преступления.</li>
                  <li>Преступления против человечности стали важной правовой категорией.</li>
                  <li>Приказ начальника не всегда освобождает от вины.</li>
                  <li>Появилась основа для современных международных судов.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="timeline-section">
            <div className="section-heading">
              <p className="eyebrow">Хронология</p>
              <h2>Как идеи Нюрнберга дошли до современности</h2>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                  <div className="timeline-item" key={item.year}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          <section className="modern-section">
            <div className="section-heading">
              <p className="eyebrow">Связь с сегодняшним днём</p>
              <h2>Почему тема не осталась только в прошлом</h2>
            </div>

            <div className="modern-grid">
              {modernLinks.map((item) => (
                  <div className="modern-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
              ))}
            </div>
          </section>

          <section className="quiz-section" id="quiz">
            <div className="section-heading center">
              <p className="eyebrow">Проверка знаний</p>
              <h2>Мини-тест</h2>
              <p className="section-description">
                Проверь, понял ли ты главные идеи.
              </p>
            </div>

            <div className="progress-box">
              <div className="progress-info">
                <span>Прогресс теста</span>
                <strong>{progress}%</strong>
              </div>
              <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {quiz.map((item, questionIndex) => (
                <div className="quiz-card" key={questionIndex}>
                  <h3>
                    {questionIndex + 1}. {item.question}
                  </h3>

                  <div className="options">
                    {item.options.map((option, optionIndex) => {
                      const isSelected = answers[questionIndex] === optionIndex;
                      const isCorrect = item.correct === optionIndex;

                      let className = "option";

                      if (isSelected && isCorrect) {
                        className += " correct";
                      } else if (isSelected && !isCorrect) {
                        className += " wrong";
                      }

                      return (
                          <button
                              key={optionIndex}
                              className={className}
                              onClick={() => handleAnswer(questionIndex, optionIndex)}
                          >
                            {option}
                          </button>
                      );
                    })}
                  </div>

                  {answers[questionIndex] !== undefined && (
                      <div className="feedback">
                        <p>
                          {answers[questionIndex] === item.correct
                              ? "Верно."
                              : "Не совсем."}
                        </p>
                        <span>{item.explain}</span>
                      </div>
                  )}
                </div>
            ))}

            <div className="quiz-actions">
              <button className="result-button" onClick={() => setShowResult(true)}>
                Показать результат
              </button>

              <button className="reset-button" onClick={resetQuiz}>
                Пройти заново
              </button>
            </div>

            {showResult && (
                <div className="result-card">
                  <h3>
                    Твой результат: {score} из {quiz.length}
                  </h3>
                  <p>{getResultText()}</p>
                  <p>
                    Главный вывод: Нюрнбергский процесс стал важной основой
                    современного международного права, потому что показал:
                    международные преступления должны расследоваться, а виновные
                    могут нести личную ответственность.
                  </p>
                </div>
            )}
          </section>
        </main>
      </div>
  );
}

export default App;