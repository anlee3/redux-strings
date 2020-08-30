/**
 *
 * StringViewer
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import StringList from 'components/StringList';
import StringInput from 'components/StringInput';
import makeSelectStringViewer from './selectors';
import reducer, { initialState } from './reducer';
import saga from './saga';

export function StringViewer({ loading, error, strings, onClick }) {
  useInjectReducer({ key: 'stringViewer', reducer });
  useInjectSaga({ key: 'stringViewer', saga });

  useEffect(() => {
    onClick();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There is an error!</div>;
  }

  return (
    <div>
      <Helmet>
        <title>StringViewer</title>
        <meta name="description" content="Description of StringViewer" />
      </Helmet>
      <StringInput
        value="Angela"
        onInputChange={() => {}}
        onSubmit={() => {}}
        buttonText="Add"
      />
      <StringList strings={strings} />
    </div>
  );
}

StringViewer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  strings: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

const mapStateToProps = state => state.stringViewer || initialState;

// const mapStateToProps = createStructuredSelector({
//   stringViewer: makeSelectStringViewer(),
// });

function mapDispatchToProps(dispatch) {
  const onClick = () => {
    dispatch({ type: 'GET_STRINGS', strings: ['large', 'dog'] });
  };

  return {
    onClick,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringViewer);
