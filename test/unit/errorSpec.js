( function() {
	'use strict';

	describe( 'vui-error', function() {

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
		} );

		describe( 'selectors', function() {

			it( 'defines a ".vui-error" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-error' );
			} );

		} );

		describe( 'error container', function() {

			var node;

			beforeEach( function () {
				node = document.body.appendChild( document.createElement( 'div' ) );
				node.className = 'vui-error';
				node.appendChild( document.createTextNode( 'error message' ) );
			} );

			afterEach( function() {
				document.body.removeChild( node );
			} );

			it( 'has 6px padding', function() {
				expect( node ).toHavePadding( '6px' );
			} );

			it( 'has 0 margin', function() {
				expect( node ).toHaveMargin( '0px' );
			} );

			it( 'has the error background-color', function() {
				expect( node ).toHaveBackgroundColor( 'rgb(255, 238, 236)' );
			} );

			it( 'has the error border-color on left side', function() {
				expect( node ).toHaveLeftBorderColor( 'rgb(255, 121, 98)' );
				expect( node ).toHaveLeftBorderWidth( '5px' );
			} );

			it( 'has the no error border on right side', function() {
				expect( node ).toHaveRightBorderWidth( '0px' );
			} );

			it( 'has rounded corners on right side', function() {
				expect( node ).toHaveBottomLeftBorderRadius( '0px' );
				expect( node ).toHaveTopLeftBorderRadius( '0px' );
				expect( node ).toHaveBottomRightBorderRadius( '3px' );
				expect( node ).toHaveTopRightBorderRadius( '3px' );
			} );

			describe( 'rtl', function() {

				beforeEach( function () {
					document.body.setAttribute( 'dir', 'rtl' );
				} );

				afterEach( function() {
					document.body.removeAttribute( 'dir' );
				} );

				it( 'has the error border-color on right side', function() {
					expect( node ).toHaveRightBorderColor( 'rgb(255, 121, 98)' );
					expect( node ).toHaveRightBorderWidth( '5px' );
				} );

				it( 'has rounded corners on left side', function() {
					expect( node ).toHaveBottomLeftBorderRadius( '3px' );
					expect( node ).toHaveTopLeftBorderRadius( '3px' );
					expect( node ).toHaveBottomRightBorderRadius( '0px' );
					expect( node ).toHaveTopRightBorderRadius( '0px' );
				} );

				it( 'has the no error border on left side', function() {
					expect( node ).toHaveLeftBorderWidth( '0px' );
				} );

			} );

		} );

	} );

} )();
