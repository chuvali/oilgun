function chk() {
    if(document.search.kw.value == ''){
        $(".search").stop().removeClass('search_open');
        $(".search_btn").stop().removeClass('search_btn_open');
        return false;
    }
    document.search.submit();
    return false;
}