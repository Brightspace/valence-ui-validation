( function() {
	'use strict';

	describe('vui-validation', function() {

		beforeEach(function () {
			jasmine.addMatchers(vui.jasmine.dom.matchers);
		} );

		describe('selectors', function() {

			it('defines invalid selectors', function() {
				expect(document).toHaveCssSelector('.vui-invalid');
				expect(document).toHaveCssSelector('.vui-invalid:focus');
			} );

			it('defines bubble selectors', function() {
				expect(document).toHaveCssSelector('.vui-validation-bubble');
				expect(document).toHaveCssSelector('.vui-validation-bubble-show');
				expect(document).toHaveCssSelector('.vui-validation-bubble-content');
				expect(document).toHaveCssSelector('[dir="rtl"] .vui-validation-bubble-content');
				expect(document).toHaveCssSelector('.vui-validation-bubble-content::before');
				expect(document).toHaveCssSelector('[dir="rtl"] .vui-validation-bubble-content::before');
			} );

		} );

	} );

} )();
