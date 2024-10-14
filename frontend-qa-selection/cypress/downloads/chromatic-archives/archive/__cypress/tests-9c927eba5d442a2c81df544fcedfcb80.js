/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./cypress/e2e/Logintest.cy.js ***!
  \*************************************/


/* ==== Test Created with Cypress Studio ==== */
it('Login', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000');
  cy.screenshot();
  cy.get('.relative > span').click();
  cy.get('.pt-8 > :nth-child(1) > .group > .h-full').clear('te');
  cy.get('.pt-8 > :nth-child(1) > .group > .h-full').type('test@example.com');
  cy.screenshot();
  cy.get('.gradient.absolute.inset-0.opacity-50').trigger('pointerup');
  cy.get(':nth-child(4) > .group > .h-full').clear('te');
  cy.get(':nth-child(4) > .group > .h-full').type('test@123');
  cy.screenshot();
  cy.get('.opacity-70 > .gradient').click();
  cy.screenshot();
  /* ==== End Cypress Studio ==== */
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW50ZXN0LmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQUEsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO0VBQ3JCO0VBQ0FDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0VBQzFCRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFDO0VBQ2ZGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ2xDSixFQUFFLENBQUNHLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDO0VBQzlETCxFQUFFLENBQUNHLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7RUFDM0VOLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQUM7RUFDZkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLFdBQVcsQ0FBQztFQUNwRVAsRUFBRSxDQUFDRyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQztFQUN0REwsRUFBRSxDQUFDRyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFVBQVUsQ0FBQztFQUMzRE4sRUFBRSxDQUFDRSxVQUFVLENBQUMsQ0FBQztFQUNmRixFQUFFLENBQUNHLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUN6Q0osRUFBRSxDQUFDRSxVQUFVLENBQUMsQ0FBQztFQUNmO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL0xvZ2ludGVzdC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09IFRlc3QgQ3JlYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbml0KCdMb2dpbicsIGZ1bmN0aW9uKCkge1xuICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgY3kudmlzaXQoJ2xvY2FsaG9zdDozMDAwJyk7XG4gIGN5LnNjcmVlbnNob3QoKVxuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IHNwYW4nKS5jbGljaygpO1xuICBjeS5nZXQoJy5wdC04ID4gOm50aC1jaGlsZCgxKSA+IC5ncm91cCA+IC5oLWZ1bGwnKS5jbGVhcigndGUnKTtcbiAgY3kuZ2V0KCcucHQtOCA+IDpudGgtY2hpbGQoMSkgPiAuZ3JvdXAgPiAuaC1mdWxsJykudHlwZSgndGVzdEBleGFtcGxlLmNvbScpO1xuICBjeS5zY3JlZW5zaG90KClcbiAgY3kuZ2V0KCcuZ3JhZGllbnQuYWJzb2x1dGUuaW5zZXQtMC5vcGFjaXR5LTUwJykudHJpZ2dlcigncG9pbnRlcnVwJyk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCg0KSA+IC5ncm91cCA+IC5oLWZ1bGwnKS5jbGVhcigndGUnKTtcbiAgY3kuZ2V0KCc6bnRoLWNoaWxkKDQpID4gLmdyb3VwID4gLmgtZnVsbCcpLnR5cGUoJ3Rlc3RAMTIzJyk7XG4gIGN5LnNjcmVlbnNob3QoKVxuICBjeS5nZXQoJy5vcGFjaXR5LTcwID4gLmdyYWRpZW50JykuY2xpY2soKTtcbiAgY3kuc2NyZWVuc2hvdCgpXG4gIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbn0pOyJdLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJzY3JlZW5zaG90IiwiZ2V0IiwiY2xpY2siLCJjbGVhciIsInR5cGUiLCJ0cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==