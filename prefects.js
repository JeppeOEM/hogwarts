function testForNumberOfPrefects(selectedStudent) {
  // list of selected prefects:

  const prefectList = allStudents.filter((student) => student.isPrefect);

  console.log("prefectLIst", prefectList);

  // find other prefects from same house:

  let otherPrefectsFromHouse = prefectList.filter((student) => student.house === selectedStudent.house);
  console.log("otherPrefectsFromHouse is", otherPrefectsFromHouse); // is getting the array of added students

  // if there is another prefect from same house:

  if (otherPrefectsFromHouse.length >= 2) {
    console.log("There can only be two prefects from each house!");

    removeOtherPrefect(otherPrefectsFromHouse[0], otherPrefectsFromHouse[1]);
  } else {
    console.log("Its OK");

    makePrefect(selectedStudent);
  }

  // closure:

  function removeOtherPrefect(otherPrefect1, otherPrefect2) {
    console.log("otherPrefect..1 is", otherPrefect1);

    console.log("otherPrefect..2 is", otherPrefect2);

    // ask user to remove others or ignore:

    // show warning:

    document.querySelector("#remove_a_or_b").classList.remove("hide_warnings");

    // eventlisteners on buttons:

    document.querySelector("#remove_a_or_b .close_prefect_warning1").addEventListener("click", closeDialog);

    document.querySelector("#remove_a_or_b .remove_a_prefect").addEventListener("click", removePrefectA);

    document.querySelector("#remove_a_or_b .remove_b_prefect").addEventListener("click", removePrefectB);

    // show names on buttons:

    document.querySelector("#remove_a_or_b [data-field=prefectA]").textContent = otherPrefect1.firstname;

    document.querySelector("#remove_a_or_b [data-field=prefectB]").textContent = otherPrefect2.firstname;

    // if ignore, do nothing:

    // closure in closure? - close warning box:

    function closeDialog() {
      document.querySelector("#remove_a_or_b").classList.add("hide_warnings");

      // remove eventlisteners:

      document.querySelector("#remove_a_or_b .close_prefect_warning1").removeEventListener("click", closeDialog);

      document.querySelector("#remove_a_or_b .remove_a_prefect").removeEventListener("click", removePrefectA);

      document.querySelector("#remove_a_or_b .remove_b_prefect").removeEventListener("click", removePrefectB);
    }

    //if remove, do:

    function removePrefectA() {
      console.log("REMOVE A");

      otherPrefect1.isPrefect = false;

      makePrefect();

      closeDialog();
    }

    // if remove, do:

    function removePrefectB() {
      console.log("REMOVE B");

      otherPrefect2.isPrefect = false;

      makePrefect();

      closeDialog();
    }
  }

  // closure:

  function makePrefect() {
    // set isPrefect to true:

    console.log("MAKEPREFECT selectedStudent", selectedStudent);

    selectedStudent.isPrefect = true;

    displayList(allStudents);
  }
}
