import styles from './ReactHookForm.module.scss';
import { useNavigate } from 'react-router-dom';

export function ReactHookForm() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className={styles['form-container']}>
      <h1>React hook form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Terms and Conditions:
          <input type="checkbox" />
        </label>
        <br />
        <label>
          Upload picture:
          <input type="file" />
        </label>
        <br />
        <label>
          Select country:
          <select>
            <option>Russia</option>
          </select>
          <br />
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
