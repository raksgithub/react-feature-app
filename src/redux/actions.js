import * as constants from './types';

export const buyFeature = title => ({
    type: constants.BUY,
    by: title,
    bought: true
});

export const cancelFeature = () => ({
    type: constants.CANCEL
});