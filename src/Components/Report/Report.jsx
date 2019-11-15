import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import textConext from '../../context/textContext';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
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
  },
  list: {
    margin: 20,
  },
  listRow: {
    borderBottom: '1px solid black',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const StyledPDFViewer = styled(PDFViewer)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

// Create Document Component
const MyDocument = ({ database, location, match }) => {
  console.log(database, location);

  const info = database.employees.find(
    (el) => el.id === parseInt(match.params.id, 10),
  );

  //  Find and match related projects for this person
  const listItems = info.projects.map((el) => ({
    ...database.projects.find((item) => el.id === item.id),
    hours: el.hours,
  }));

  console.log(info, listItems);

  return (
    <StyledPDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Personal Data</Text>
            <Text style={styles.detailInfo}>ID: {info.id}</Text>
            <View style={styles.detailsSection}>
              <Text style={styles.detailInfo}>
                First Name: {info.firstName}
              </Text>
              <Text style={styles.detailInfo}>Last Name: {info.lastName}</Text>
              <Text style={styles.detailInfo}>Phone: {info.phone}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Related projects</Text>
            <View style={styles.list}>
              {listItems.map((el) => {
                return (
                  <View style={styles.listRow}>
                    <Text>{el.title}</Text>
                    <Text>{el.hours}h</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </Page>
      </Document>
    </StyledPDFViewer>
  );
};

export default withRouter(MyDocument);
