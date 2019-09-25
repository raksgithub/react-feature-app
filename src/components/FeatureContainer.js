import React from 'react';
import FEATURES from '../model';
import { connect } from 'react-redux';
import FeatureComponent from './FeatureComponent';
import { buyFeature, cancelFeature } from '../redux/actions';

function FeatureContainer(props) {
  const { bought, by, dispatchBuy, dispatchCancel } = props;

  function handleBuyOrCancel(title) {
    if (!bought) {
      dispatchBuy(title);
    } else {
      dispatchCancel();
    }
  }

  const pathname = props.location.pathname;
  const featureName = pathname.substring(1, pathname.length);
  let category = 'one';
  if (featureName === 'two') {
    category = 'two';
  }
  const currentFeature = FEATURES.filter(feature => feature.category === category);
  return (
    <>
      <FeatureComponent
        by={by}
        bought={bought}
        features={currentFeature}
        handleButtonAction={handleBuyOrCancel}
      />
    </>
  );
}

const mapStateToProps = state => ({
  bought: state.featureReducer.bought,
  by: state.featureReducer.by
});

const mapDispatchToProps = dispatch => ({
  dispatchBuy: by => dispatch(buyFeature(by)),
  dispatchCancel: () => dispatch(cancelFeature())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureContainer);