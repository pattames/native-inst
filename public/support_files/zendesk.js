$.fn.replaceWithSelectize = function(config) {
    config = $.extend({
        persist: false,
        maxItems: 1,
        valueField: 'value',
        labelField: 'label',
        searchField: ['label']
    }, config || {});

    $(this).selectize(config);
    $(this).siblings('a.nesty-input').remove();

    return $(this);
};

var dataLayerPage;
var baseUrl = '//www.native-instruments.com';
var productsFieldId = 'request_custom_fields_28013069';
var formTypeMap = {
    // only these need to fetch the product list from soa
    133029: "registration_support",
    129045: "order_support",
    133049: "pre_sales_support"
};

if (location.host !== "support.native-instruments.com" && location.host !== "nativeinstruments.zendesk.com") {
    baseUrl = '//www.staging.native-instruments.com';
    productsFieldId = 'request_custom_fields_26938109';
    formTypeMap = {
        // only these need to fetch the product list from soa
        122169: "registration_support",
        118325: "order_support",
        122189: "pre_sales_support"
    };

}
$.getScript("//selectize.github.io/selectize.js/js/selectize.js")
    .then(function() {

        var apiUrl = baseUrl + '/typo3conf/ext/ni_assets/php/soa_proxy.php/zendesk/products?callback=?';
        var formTypeField = $('#request_issue_type_select');

        // Replace the zendesk select boxes with selectize
        // formTypeField.replaceWithSelectize();

        var inputField = $('#' + productsFieldId);

        if (!inputField.length) {
            // The product select is not yet on the page
            return;
        }

        // Save the static list to a variable so we can recall it
        var staticProductList = inputField.data('tagger');

        if (!inputField[0].selectize) {
            inputField.replaceWithSelectize({
                options: staticProductList
            });
        }

        var selectize = inputField[0].selectize;

        var formType = formTypeMap[formTypeField.val()];

        if (formType) {
            return $.getJSON(apiUrl, {contactFormType: formType, nativeID: 'xxx' /* The scrambled native is not yet available */})
                .then(function(response) {
                    if (response.status !== 200 || !response.products || !response.products.length) return;

                    selectize.clearOptions();
                    selectize.addOption(response.products.map(function(product) {
                        return { label: product.PRODUCT_NAME, value: product.EBS_PRODUCT_ID };
                    }));
                    selectize.refreshOptions(false);
                });
        }
    });


dataLayerPage = {
  /*
  Functions to help fixing the URLs in Zendesk in the request creation workflow.
  When the request form is submitted with an error, the url will change to `/requests`,
  making it impossible to track a request creation funnel ('/requests' is the url for "My activities" as well).
   */
  selectedForm: function(what) {
    /*
    Returns the value or text when an issue type has been selected on the "New request page"
    Params:
      what: string: val | text
     */
    return $("#request_issue_type_select :selected")[what]();
  },
  comingFromNewContributionPage: function() {
    var matches;
    matches = document.referrer.match(/\/new(\?|$)/);
    return matches != null ? true : void 0;
  },

  newContributionPage: function() {
    /*
    Will return a new page path to use in a dataLayer variable in the form `community/posts/new` by adding /new to
    and set this in the url so it is available as document.referrer once the form was successfully submitted.

    * Must only be called on "Community post page" and "New request page" templates

    Usage:
      var dataLayer = window.dataLayer || [];

      dataLayer.push({
        'page': dataLayerPage.newContributionPage()
      });
     */
    var page, parts;
    parts = document.location.pathname.split('/');
    if (parts[parts.length - 1] === 'new') {
      return document.location.pathname;
    } else {
      page = document.location.pathname + "/new";
      window.history.pushState(null, "Submit", page);
      return page;
    }
  },
  contributionDetailPage: function() {
    /*
    After a new ticket creation, the user is by default forwarded to the request detail page, e.g. `/requests/226910`,
    which cannot be identified as a new request.

    Function will return a new page path to use in a dataLayer variable in the form `/requests/new/226910?`
    Must only be called on "Request page" template!

    Usage:
      var dataLayer = window.dataLayer || [];

      dataLayer.push({
        'page': dataLayerPage.requestDetailPage()
      });
     */
    var isNewContribution, parts, contributionId;
    isNewContribution = dataLayerPage.comingFromNewContributionPage();
    if (isNewContribution == null) {
      return document.location.pathname;
    } else {
      parts = document.location.pathname.split('/');
      contributionId = parts.pop();
      parts.push('new');
      return parts.join('/') + ("/" + contributionId);
    }
  }
};
