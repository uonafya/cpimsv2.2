$(document).ready(function () {
    $( ".dropdown-menu li" ).click(function(event) {
    if( $(this).attr("id") == 'national'){
        fetchHivStatsFromServer($(this).attr("id"));
    }else if( $(this).attr("id") == 'county'){
        fetchHivStatsFromServer($(this).attr("id"));
    }else if( $(this).attr("id") == 'sub_county'){
        fetchHivStatsFromServer($(this).attr("id"));
    }else if( $(this).attr("id") == 'countituency'){
        fetchHivStatsFromServer($(this).attr("id"));
    }else if( $(this).attr("id") == 'ward'){
        fetchHivStatsFromServer($(this).attr("id"));
    }else {
    }

    });
});