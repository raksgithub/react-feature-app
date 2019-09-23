import React from 'react';
import Proptypes from 'prop-types';

function makeStyleOfContainer(title, bought, by) {
  if (bought && title !== by) {
    return {
      backgroundColor: '#d1d0cd'
    }
  }
  switch (title) {
    case 'starter':
      return { backgroundColor: '#868a83' };
    case 'regular':
      return { backgroundColor: '#1a94d6' };
    case 'professional':
      return { backgroundColor: '#6f75a6' };
    default:
      return { backgroundColor: '#fa3628' };
  }
}

function makeStyleOfButton(title, bought, by) {
  if (bought && title !== by) {
    return {
      backgroundColor: '#e3e3dc',
      cursor: 'default',
      color: 'white'
    }
  }
}

export default function FeatureComponent(props) {
  const { features, bought, by, handleButtonAction } = props;

  return (
    <div className="feature-container">
      {features.map(feature => (
        <div
          className="feature-item"
          key={feature.id}
          style={makeStyleOfContainer(feature.title, bought, by)}
        >
          <div className="feature-item-title">
            {feature.title.toUpperCase()}
          </div>
          <div className="feature-item-price">
            {bought && by === feature.title ? 'BOUGHT!' : feature.price}
          </div>
          <div className="feature-item-footer">
            <p>{feature.description}</p>
            <button
              onClick={() => handleButtonAction(feature.title)}
              disabled={bought && by !== feature.title}
              style={makeStyleOfButton(feature.title, bought, by)}
              className="button"
            >
              {bought && by === feature.title ? 'CANCEL' : 'BUY'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

FeatureComponent.propTypes = {
  features: Proptypes.arrayOf(Proptypes.object).isRequired,
  bought: Proptypes.bool.isRequired,
  by: Proptypes.string,
  handleButtonAction: Proptypes.func.isRequired
};