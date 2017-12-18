
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var ans = [];
  for (var x = 0; x < arr.length; x += size) {
    ans.push(arr.slice(x, x + size));
  }return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);