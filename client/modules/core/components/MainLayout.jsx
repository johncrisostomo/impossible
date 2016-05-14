import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Layout = ({content}) => (
  <Grid>
   <Row>
    <Col cs={12}>
      <PageHeader>Impossible List</PageHeader>
    </Col>
   </Row>
   {content()}
 </Grid>
);

export default Layout;
