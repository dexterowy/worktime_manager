/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  PDFDownloadLink,
} from '@react-pdf/renderer';

import colors from '../../Utils/colors';
import textConext from '../../context/textContext';

Font.register({
  family: 'Roboto',
  src:
    'https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=latin-ext',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
  },
  date: {
    textAlign: 'right',
    fontSize: 16,
    padding: 20,
  },
  mainHeader: {
    fontSize: 36,
    textAlign: 'center',
    padding: 20,
  },
  detailsSection: {
    margin: 10,
    padding: 10,
  },
  detailInfo: {
    padding: 5,
  },
  header: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 26,
  },
  list: {
    margin: 20,
  },
  listHeading: {
    borderBottom: '2 solid black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listRow: {
    borderBottom: '1 solid black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const StyledPDFViewer = styled(PDFViewer)`
  width: 100%;
  height: calc(100% - 40px);
  margin: 30px auto;
  padding: 0;
`;

// Create Document Component
const MyDocument = ({ database, match }) => {
  //  Get current date for header
  const date = new Date();
  // eslint-disable-next-line operator-linebreak
  const dateHeader = `${date.getDate()}.${date.getMonth() +
    1}.${date.getFullYear()}r.`;

  //  Find Employee in database
  const info = database.employees.find(
    (el) => el.id === parseInt(match.params.id, 10),
  );

  //  Find and match related projects for this person
  const listItems = info.projects.map((el) => ({
    ...database.projects.find((item) => el.id === item.id),
    hours: el.hours,
  }));

  const {
    texts: {
      details: { employees, listsType },
      report,
    },
    language,
  } = useContext(textConext);

  //  React-PDF library doesn't support polish characters.
  //  Language for report is fixed to english :(
  const languageEN = 'en';

  const ReportDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.date}>{dateHeader}</Text>
        <Text style={styles.mainHeader}>Report</Text>
        <View style={styles.section}>
          <Text style={styles.header}>Personal Data</Text>
          <View style={styles.detailsSection}>
            <Text style={styles.detailInfo}>
              {employees.id[languageEN]}: {info.id}
            </Text>
            <Text style={styles.detailInfo}>
              {employees.firstName[languageEN]}: {info.firstName}
            </Text>

            <Text style={styles.detailInfo}>
              {employees.lastName[languageEN]}: {info.lastName}
            </Text>
            <Text style={styles.detailInfo}>
              {employees.phone[languageEN]}: {info.phone}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>{listsType.employee[languageEN]}</Text>
          <View style={styles.list}>
            <View style={styles.listHeading}>
              <Text>Project</Text>
              <Text>Hours</Text>
            </View>
            {listItems.map((el) => (
              <View style={styles.listRow} key={el.id}>
                <Text>{el.title}</Text>
                <Text>{el.hours}h</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <PDFDownloadLink
        document={ReportDocument}
        style={{
          color: colors.fonts.dark,
          textDecoration: 'none',
          padding: '20px',
          backgroundColor: colors.buttons.primary,
          margin: '15px',
          borderRadius: '5px',
        }}
        fileName="somename.pdf"
      >
        {({ loading }) => (loading ? '' : report.download[language])}
      </PDFDownloadLink>
      <StyledPDFViewer>{ReportDocument}</StyledPDFViewer>
    </>
  );
};

MyDocument.propTypes = {
  database: PropTypes.shape({
    employees: PropTypes.arrayOf(PropTypes.object),
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(MyDocument);
