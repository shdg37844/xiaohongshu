"use strict";

;
(function () {
  function resizeRem() {
    var docElement = document.documentElement;
    var width = docElement.getBoundingClientRect().width;
    var rem = width / 10;
    docElement.style.fontSize = rem + 'px';
  }
  window.addEventListener('resize', resizeRem);
  window.addEventListener('pageshow', resizeRem);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtLmpzIiwibmFtZXMiOlsicmVzaXplUmVtIiwiZG9jRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwid2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZW0iLCJzdHlsZSIsImZvbnRTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VzIjpbInJlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7XHJcbihmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIHJlc2l6ZVJlbSgpIHtcclxuICAgICAgICBsZXQgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICBsZXQgd2lkdGggPSBkb2NFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGxldCByZW0gPSB3aWR0aCAvIDEwO1xyXG4gICAgICAgIGRvY0VsZW1lbnQuc3R5bGUuZm9udFNpemUgPSByZW0gKyAncHgnO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVJlbSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCByZXNpemVSZW0pO1xyXG5cclxufSkgKCk7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsQ0FBQyxZQUFXO0VBQ1IsU0FBU0EsU0FBU0EsQ0FBQSxFQUFHO0lBQ2pCLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxlQUFlO0lBQ3pDLElBQUlDLEtBQUssR0FBR0gsVUFBVSxDQUFDSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUNELEtBQUs7SUFDcEQsSUFBSUUsR0FBRyxHQUFHRixLQUFLLEdBQUcsRUFBRTtJQUNwQkgsVUFBVSxDQUFDTSxLQUFLLENBQUNDLFFBQVEsR0FBR0YsR0FBRyxHQUFHLElBQUk7RUFDMUM7RUFDQUcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVWLFNBQVMsQ0FBQztFQUM1Q1MsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVWLFNBQVMsQ0FBQztBQUVsRCxDQUFDLEVBQUcsQ0FBQyJ9