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

	} );

} )();
