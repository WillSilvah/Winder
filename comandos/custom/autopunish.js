module.exports = [{
    name: "autopunish",
    code: `
    $ifx[
     $if[$getMemberVar[warnsTotal;$get[userID]]==1;
     ]
]`
}]