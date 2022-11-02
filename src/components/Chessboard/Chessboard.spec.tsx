// @ts-ignore
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Chessboard as ReactChessboard } from 'react-chessboard';

import Chessboard from '@components/Chessboard/Chessboard';

describe( '<Chessboard />', () => {

  it( 'should mount conditionally', () => {
    const wrapper = shallow( <Chessboard /> );
    expect( wrapper.contains( <ReactChessboard /> ) ).to.equal( true );
  } );
} );
