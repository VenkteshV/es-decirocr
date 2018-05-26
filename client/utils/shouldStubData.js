const shouldStubData = (data) => {
  const StubEnabled = data.hasOwnProperty('STUB_ENABLED')? data.STUB_ENABLED  : false;
  const queryString = typeof location != 'undefined' ? location.search : '';
  const isStubbed = queryString.search('stub=.+') != -1;
  return  StubEnabled && isStubbed ;
};
export default shouldStubData;
