import { css } from '@emotion/react';

const Career = () => {
  return (
    <div css={styles.careerBox}>
      <h1 css={styles.careerTitle}>Career</h1>
      <div css={styles.careerTableWrapper}>
        <table css={styles.careerTable}>
          <thead css={styles.tableHead}>
            <tr css={styles.tableHeadLine}>
              <th>COMPANY</th>
              <th>PERIOD</th>
              <th>OCCUPATION</th>
            </tr>
          </thead>
          <tbody css={styles.tableBody}>
            <tr css={styles.tableBodyLine}>
              <td css={styles.tableBodyCell}>dip Corporation.</td>
              <td css={styles.tableBodyCell}>2021 ~ 2022</td>
              <td css={styles.tableBodyCell}>Server Side Engineering</td>
            </tr>
            <tr css={styles.tableBodyLine}>
              <td css={styles.tableBodyCell}>Lefixea Inc.</td>
              <td css={styles.tableBodyCell}>2022 ~ 2023</td>
              <td css={styles.tableBodyCell}>
                Engineering, Sales, Corp&Products PR
              </td>
            </tr>
            <tr css={styles.tableBodyLine}>
              <td css={styles.tableBodyCell}>employment agency</td>
              <td css={styles.tableBodyCell}>2023 ~ current</td>
              <td css={styles.tableBodyCell}>New Business Development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  careerBox: css`
    width: 100%;
    margin-bottom: 50px;
  `,
  careerTitle: css`
    font-size: 30px;
    color: #2c3e50;
  `,
  careerTableWrapper: css`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 7px;
    box-shadow: 2px 2px 5px 1px #c0c0c0;
    overflow-x: scroll;
  `,
  careerTable: css`
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;
  `,
  tableHead: css`
    height: 30px;
    border-bottom: solid 1px #c0c0c0;
  `,
  tableHeadLine: css`
    font-size: 15px;
    color: #2c3e50;
    text-align: left;
  `,
  tableBody: css``,
  tableBodyLine: css`
    height: 40px;
  `,
  tableBodyCell: css`
    font-size: 17px;
    display: table-cell;
    vertical-align: bottom;
    padding-right: 20px;
  `,
};

export default Career;
