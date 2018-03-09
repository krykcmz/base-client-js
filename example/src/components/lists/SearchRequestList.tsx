import * as React from 'react';
import AbstractList, { AbstractProperties } from './AbstractList';
import SearchRequest from 'base/repository/models/SearchRequest';
import SearchRequestHolder from '../holders/SearchRequestHolder';

interface Properties extends AbstractProperties<SearchRequest> {
}

export default class SearchRequestList extends AbstractList<Properties, SearchRequest> {

    bindHolder(dataItem: SearchRequest, position: number): Object {
        return (
            <SearchRequestHolder
                model={dataItem}
                key={position}
            />
        );

    }

}
