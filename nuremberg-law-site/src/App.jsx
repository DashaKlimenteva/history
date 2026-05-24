import { useState } from "react";
import "./App.css";

const sections = [
  {
    id: 1,
    title: "Что такое Нюрнбергский процесс?",
    icon: "⚖️",
    text:
        "Нюрнбергский процесс — это международный суд над главными нацистскими преступниками после Второй мировой войны. Он проходил в 1945–1946 годах в немецком городе Нюрнберге.",
    detail:
        "Главная особенность процесса заключалась в том, что преступления нацистского режима рассматривались не только как преступления против отдельных стран, но и как преступления против всего человечества.",
  },
  {
    id: 2,
    title: "Как работал международный трибунал?",
    icon: "🏛️",
    text:
        "Суд был создан четырьмя державами-победительницами: СССР, США, Великобританией и Францией. Представители этих стран участвовали в суде как судьи и обвинители.",
    detail:
        "На процессе рассматривались документы, свидетельства очевидцев, кинохроника и другие доказательства. Это был не просто акт мести, а попытка провести открытый суд по международным правилам.",
  },
  {
    id: 3,
    title: "Главные обвинения",
    icon: "📄",
    text:
        "Обвиняемым предъявили несколько видов обвинений: преступления против мира, военные преступления, преступления против человечности и участие в заговоре.",
    detail:
        "Особенно важным стало понятие «преступления против человечности». Оно показало, что массовые убийства, преследования и уничтожение мирного населения являются делом не только одной страны, а всего мира.",
  },
  {
    id: 4,
    title: "Личная ответственность",
    icon: "👤",
    text:
        "До Нюрнберга часто считалось, что за действия государства отвечает только само государство. Нюрнбергский процесс изменил этот подход.",
    detail:
        "После Нюрнберга стало ясно: конкретные люди — политики, военные командиры и чиновники — могут нести личную ответственность за международные преступления.",
  },
  {
    id: 5,
    title: "Почему приказ не всегда оправдывает?",
    icon: "🚫",
    text:
        "Один из важных выводов Нюрнберга: фраза «я просто выполнял приказ» не всегда освобождает человека от ответственности.",
    detail:
        "Если приказ был явно преступным, исполнитель тоже может быть виновен. Это стало важным принципом международного права.",
  },
  {
    id: 6,
    title: "Наследие Нюрнберга сегодня",
    icon: "🌍",
    text:
        "Идеи Нюрнбергского процесса повлияли на развитие международного права и создание современных международных судов.",
    detail:
        "Сегодня эти принципы связаны с деятельностью международных трибуналов и Международного уголовного суда. Нюрнберг стал основой идеи: даже самые высокопоставленные люди не должны быть выше закона.",
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
  },
  {
    question: "Что означает принцип «приказ не всегда оправдывает»?",
    options: [
      "Любой приказ можно не выполнять",
      "Если приказ преступный, исполнитель может быть ответственным",
      "Ответственность всегда несёт только начальник",
    ],
    correct: 1,
  },
  {
    question: "Почему Нюрнберг важен для современного права?",
    options: [
      "Он показал, что международные преступления можно рассматривать в суде",
      "Он отменил все национальные законы",
      "Он был обычным немецким судом",
    ],
    correct: 0,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const score = quiz.reduce((total, item, index) => {
    return answers[index] === item.correct ? total + 1 : total;
  }, 0);

  function handleAnswer(questionIndex, optionIndex) {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
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
          </div>
        </header>

        <main>
          <section className="interactive-section">
            <h2>Изучи тему по шагам</h2>
            <p className="section-description">
              Нажимай на карточки слева, чтобы узнать, как Нюрнбергский процесс
              повлиял на право.
            </p>

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

          <section className="compare-section">
            <h2>Было / стало</h2>

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

          <section className="quiz-section">
            <h2>Мини-тест</h2>
            <p className="section-description">
              Проверь, понял ли ты главные идеи проекта.
            </p>

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
                      <p className="feedback">
                        {answers[questionIndex] === item.correct
                            ? "Верно. Это один из ключевых выводов Нюрнбергского процесса."
                            : "Не совсем. Попробуй ещё раз или вернись к материалам выше."}
                      </p>
                  )}
                </div>
            ))}

            <button className="result-button" onClick={() => setShowResult(true)}>
              Показать результат
            </button>

            {showResult && (
                <div className="result-card">
                  <h3>
                    Твой результат: {score} из {quiz.length}
                  </h3>
                  <p>
                    Главный вывод: Нюрнбергский процесс стал важной основой
                    современного международного права, потому что показал:
                    международные преступления должны расследоваться, а виновные
                    могут нести личную ответственность.
                  </p>
                </div>
            )}
          </section>

          <section className="sources-section">
            <h2>Источники и примечание</h2>
            <p>
              Для проекта можно использовать материалы ООН о Нюрнбергских
              принципах, информацию о Международном военном трибунале, учебные
              материалы по истории Второй мировой войны и сведения о современных
              международных судах.
            </p>
            <p className="note">
              Этот сайт является образовательным упрощением и не заменяет
              полноценное историческое или юридическое исследование.
            </p>
          </section>
        </main>
      </div>
  );
}

export default App;