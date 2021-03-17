import React, { Component } from 'react';
import '../css/quizApp.css';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  render() {
      const reload = () => {
        window.location.reload(false);
      }
    return (
      <div className="quizApp">
        <div className="score">{this.state.score}</div>
        <a 
          id="StartButton"
          onClick={() => {
            fetch(
              'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
            )
              .then((response) => response.json())
              .then((data) => {
                  document.getElementById('playagain').style.display = 'block'
                document.getElementById('StartButton').disabled = true;
                data = data.results;
                console.log(data);

                let count = 0;

                for (let item of data) {
                  let k = 0;
                  document.getElementById('question-list').innerHTML += `
                        <div class="question">${item.question}</div>
                      
                     `;
                  let random = Math.floor(Math.random() * 3 + 0);
                  for (let i = 0; i < 4; i++) {
                    if (random == i) {
                      document.getElementsByClassName('question')[
                        count
                      ].innerHTML += `<button class="answer correct-ans answer${count}">${item.correct_answer}</button>`;
                    } else {
                      document.getElementsByClassName('question')[
                        count
                      ].innerHTML += `<button class="answer  wrong-ans answer${count}">${item.incorrect_answers[k]}</button>`;
                      k++;
                    }
                  }
                  count++;
                }
              })
              .then(() => {
                for (let i = 0; i < 5; i++) {
                  document
                    .getElementsByClassName('correct-ans')
                    [i].addEventListener('click', () => {
                      for (let j = 0; j < 4; j++) {
                        document
                          .getElementsByClassName(`answer${i}`)[0]
                          .remove();
                      }
                      document.getElementsByClassName('question')[
                        i
                      ].style.color = 'transparent';
                      this.setState({
                        score: this.state.score + 10,
                      });
                    });
                }
                for (let i = 0; i < 15; i++) {
                  document
                    .getElementsByClassName('wrong-ans')
                    [i].addEventListener('click', () => {
                      alert('You are failed');
                      if (i < 3) {
                        for (let j = 0; j < 4; j++) {
                          document.getElementsByClassName(
                            'question'
                          )[0].style.color = 'transparent';
                          document
                            .getElementsByClassName('answer0')[0]
                            .remove();
                        }
                      } else if (i < 6) {
                        for (let j = 0; j < 4; j++) {
                          document.getElementsByClassName(
                            'question'
                          )[1].style.color = 'transparent';
                          document
                            .getElementsByClassName('answer1')[0]
                            .remove();
                        }
                      } else if (i < 9) {
                        for (let j = 0; j < 4; j++) {
                          document.getElementsByClassName(
                            'question'
                          )[2].style.color = 'transparent';
                          document
                            .getElementsByClassName('answer2')[0]
                            .remove();
                        }
                      } else if (i < 12) {
                        for (let j = 0; j < 4; j++) {
                          document.getElementsByClassName(
                            'question'
                          )[3].style.color = 'transparent';
                          document
                            .getElementsByClassName('answer3')[0]
                            .remove();
                        }
                      } else {
                        for (let j = 0; j < 4; j++) {
                          document.getElementsByClassName(
                            'question'
                          )[4].style.color = 'transparent';
                          document
                            .getElementsByClassName('answer4')[0]
                            .remove();
                        }
                      }
                    });
                }
              });
          }}
        >
          Start
        </a>
        <div id="question-list"></div>
        <button onClick={reload} id="playagain">Play Again?</button>
      </div>
    );
  }
}
