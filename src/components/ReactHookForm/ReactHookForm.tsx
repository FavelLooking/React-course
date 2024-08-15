import styles from './ReactHookForm.module.scss';

export function ReactHookForm() {
  return (
    <div className={styles['form-container']}>
      <h1>Uncontrolled Form Page</h1>
      <form action="">
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
        </label>
        <br />
      </form>
    </div>
  );
}
