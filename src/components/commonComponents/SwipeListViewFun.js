import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

const SwipeListViewFun = (props) => {
    const { data, renderItem, renderHiddenItem, rightOpenValue, previewRowKey, previewOpenValue, previewOpenDelay, onRowDidOpen } = props
    return (
        <SwipeListView
            data={data}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={rightOpenValue}
            previewRowKey={previewRowKey}
            previewOpenValue={previewOpenValue}
            previewOpenDelay={previewOpenDelay}
            onRowDidOpen={onRowDidOpen}
        />
    )
}

export default SwipeListViewFun