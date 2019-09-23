import React from 'react';
import FEATURES from '../model';
import { connect } from 'react-redux';
import FeatureComponent from './FeatureComponent';
import { buyFeature, cancelFeature } from '../redux/actions';
import useFeatures from './useFeatures';

function FeatureContainer(props) {
  const [ones, twos] = useFeatures(FEATURES);
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
  return (
    <>
      <FeatureComponent
        by={by}
        bought={bought}
        features={featureName === 'two' ? twos : ones}
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