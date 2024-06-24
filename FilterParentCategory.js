// Description: This file contains the code to filter the parent category lookup based on the selected category in the form.
var Sdk = window.Sdk || {};
var productcategory_tablename = 'tr_productcategorydatlnt1';
var filterstring = ''

Sdk.setParentCategoryfilter =  async function (ExecutionContext) {
    formContext = executionContext.getFormContext()
    var productcategory_id = formContext.data.entity.getId()
    filterstring = await FilterStringBuilder(productcategory_id)

    formContext.getControl('tr_parentcategory').addPreSearch(Sdk.filter_ParenCategory)
}

//PreSearch function
Sdk.filter_ParenCategory = function (executionContext) {
    console.log('filterstring:' + filterstring)
    formContext = executionContext.getFormContext()
    formContext.getControl('tr_parentcategory').addCustomFilter(filterstring, productcategory_tablename)
}

//Build filter string
async function FilterStringBuilder(current_id) {
    var filterstr = '<filter>'
    var prefix = '<condition attribute="tr_productcategoryid" operator="ne" value="'
    var suffix = '" />'

    filterstr += prefix + current_id + suffix

    var SelectQuery = "?$select=tr_productcategoryid&filter=(_tr_parentcategory_value eq " + current_id + ")"
    var retrieveRecord = await Xrm.WebApi.retrieveMultipleRecords(productcategory_tablename, SelectQuery)

    for (var i = 0; i < retrieveRecord.entities.length; i++) {
        var rec = retrieveRecord.entities[i];
        filterstr += prefix + rec.tr_productcategoryid + suffix
    }
    filterstr += '</filter>'
    return filterstr
}
