import React, {useState} from 'react';

export interface QuizOption {
  id: string;
  label: string;
  correct?: boolean;
  explanation?: string;
}

export interface QuizProps {
  question: string;
  options: QuizOption[];
  successMessage?: string;
  failureMessage?: string;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  options,
  successMessage = '回答正确，继续加油！',
  failureMessage = '先别着急，看看解析再试一次。',
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correct = submitted && options.some((option) => option.id === selected && option.correct);
  const hasAnswered = submitted && selected !== null;

  return (
    <div className="quiz-callout">
      <h4>课堂小测</h4>
      <p>{question}</p>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {options.map((option) => {
          const isChecked = option.id === selected;
          const isCorrect = submitted && option.correct;
          const isIncorrectSelection = submitted && isChecked && !option.correct;

          return (
            <li key={option.id} style={{marginBottom: '0.75rem'}}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: isCorrect
                    ? '1px solid rgba(0, 191, 125, 0.6)'
                    : isIncorrectSelection
                    ? '1px solid rgba(220, 53, 69, 0.6)'
                    : '1px solid rgba(29, 66, 137, 0.15)',
                  backgroundColor: isCorrect
                    ? 'rgba(0, 191, 125, 0.08)'
                    : isIncorrectSelection
                    ? 'rgba(220, 53, 69, 0.08)'
                    : 'rgba(255, 255, 255, 0.65)',
                }}
              >
                <input
                  type="radio"
                  name="quiz"
                  value={option.id}
                  checked={isChecked}
                  onChange={() => {
                    setSelected(option.id);
                    setSubmitted(false);
                  }}
                  style={{marginTop: '0.35rem'}}
                />
                <div>
                  <strong>{option.label}</strong>
                  {submitted && option.explanation ? (
                    <div style={{marginTop: '0.5rem', color: '#31456a'}}>{option.explanation}</div>
                  ) : null}
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      <div style={{display: 'flex', gap: '0.75rem'}}>
        <button
          type="button"
          className="button button--primary"
          onClick={() => {
            if (selected) {
              setSubmitted(true);
            }
          }}
          disabled={selected === null}
        >
          提交答案
        </button>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => {
            setSelected(null);
            setSubmitted(false);
          }}
        >
          重新选择
        </button>
      </div>
      {hasAnswered ? (
        <div style={{marginTop: '1rem', fontWeight: 600}}>
          {correct ? successMessage : failureMessage}
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
