"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const rental_pb_1 = require("./proto_gen/rental/rental_pb");
const request_1 = require("./request");
var ProfileService;
(function (ProfileService) {
    function getProfile() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'GET',
            path: '/v1/profile',
            respMarshaller: rental_pb_1.rental.v1.Profile.fromObject
        });
    }
    ProfileService.getProfile = getProfile;
    function submitProfile(req) {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/v1/profile',
            data: req,
            respMarshaller: rental_pb_1.rental.v1.Profile.fromObject
        });
    }
    ProfileService.submitProfile = submitProfile;
    function clearProfile() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'DELETE',
            path: '/v1/profile',
            respMarshaller: rental_pb_1.rental.v1.Profile.fromObject
        });
    }
    ProfileService.clearProfile = clearProfile;
    function getProfilePhoto() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: "GET",
            path: "/v1/profile/photo",
            respMarshaller: rental_pb_1.rental.v1.GetProfilePhotoResponse.fromObject,
        });
    }
    ProfileService.getProfilePhoto = getProfilePhoto;
    function createProfilePhoto() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: "POST",
            path: "/v1/profile/photo",
            respMarshaller: rental_pb_1.rental.v1.CreateProfilePhotoResponse.fromObject,
        });
    }
    ProfileService.createProfilePhoto = createProfilePhoto;
    function completeProfilePhoto() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: "POST",
            path: "/v1/profile/photo/complete",
            respMarshaller: rental_pb_1.rental.v1.Identity.fromObject,
        });
    }
    ProfileService.completeProfilePhoto = completeProfilePhoto;
    function clearProfilePhoto() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: "DELETE",
            path: "/v1/profile/photo",
            respMarshaller: rental_pb_1.rental.v1.ClearProfilePhotoResponse.fromObject,
        });
    }
    ProfileService.clearProfilePhoto = clearProfilePhoto;
    function uploadProfilePhoto() {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: "POST",
            path: "/v1/profile/photo/upload",
            respMarshaller: rental_pb_1.rental.v1.UploadFilePhotoResponse.fromObject,
        });
    }
    ProfileService.uploadProfilePhoto = uploadProfilePhoto;
})(ProfileService = exports.ProfileService || (exports.ProfileService = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBQXNEO0FBQ3RELHVDQUFvQztBQUdwQyxJQUFpQixjQUFjLENBbUU5QjtBQW5FRCxXQUFpQixjQUFjO0lBQzNCLFNBQWdCLFVBQVU7UUFDdEIsT0FBTyxpQkFBTyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDLE1BQU0sRUFBQyxLQUFLO1lBQ1osSUFBSSxFQUFDLGFBQWE7WUFDbEIsY0FBYyxFQUFFLGtCQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1NBQy9DLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFOZSx5QkFBVSxhQU16QixDQUFBO0lBR0QsU0FBZ0IsYUFBYSxDQUFDLEdBQXVCO1FBQ2pELE9BQU8saUJBQU8sQ0FBQyx3QkFBd0IsQ0FBQztZQUNwQyxNQUFNLEVBQUMsTUFBTTtZQUNiLElBQUksRUFBQyxhQUFhO1lBQ2xCLElBQUksRUFBQyxHQUFHO1lBQ1IsY0FBYyxFQUFFLGtCQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1NBQy9DLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFQZSw0QkFBYSxnQkFPNUIsQ0FBQTtJQUdELFNBQWdCLFlBQVk7UUFDeEIsT0FBTyxpQkFBTyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDLE1BQU0sRUFBQyxRQUFRO1lBQ2YsSUFBSSxFQUFDLGFBQWE7WUFDbEIsY0FBYyxFQUFFLGtCQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1NBQy9DLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFOZSwyQkFBWSxlQU0zQixDQUFBO0lBRUQsU0FBZ0IsZUFBZTtRQUMzQixPQUFPLGlCQUFPLENBQUMsd0JBQXdCLENBQUM7WUFDcEMsTUFBTSxFQUFDLEtBQUs7WUFDWixJQUFJLEVBQUMsbUJBQW1CO1lBQ3hCLGNBQWMsRUFBQyxrQkFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVO1NBQzlELENBQUMsQ0FBQTtJQUNOLENBQUM7SUFOZSw4QkFBZSxrQkFNOUIsQ0FBQTtJQUVELFNBQWdCLGtCQUFrQjtRQUM5QixPQUFPLGlCQUFPLENBQUMsd0JBQXdCLENBQUM7WUFDcEMsTUFBTSxFQUFDLE1BQU07WUFDYixJQUFJLEVBQUMsbUJBQW1CO1lBQ3hCLGNBQWMsRUFBQyxrQkFBTSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxVQUFVO1NBQ2pFLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFOZSxpQ0FBa0IscUJBTWpDLENBQUE7SUFFRCxTQUFnQixvQkFBb0I7UUFDaEMsT0FBTyxpQkFBTyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDLE1BQU0sRUFBQyxNQUFNO1lBQ2IsSUFBSSxFQUFDLDRCQUE0QjtZQUNqQyxjQUFjLEVBQUMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVU7U0FDL0MsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQU5lLG1DQUFvQix1QkFNbkMsQ0FBQTtJQUVELFNBQWdCLGlCQUFpQjtRQUM3QixPQUFPLGlCQUFPLENBQUMsd0JBQXdCLENBQUM7WUFDcEMsTUFBTSxFQUFDLFFBQVE7WUFDZixJQUFJLEVBQUMsbUJBQW1CO1lBQ3hCLGNBQWMsRUFBQyxrQkFBTSxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVO1NBQ2hFLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFOZSxnQ0FBaUIsb0JBTWhDLENBQUE7SUFFRCxTQUFnQixrQkFBa0I7UUFDOUIsT0FBTyxpQkFBTyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDLE1BQU0sRUFBQyxNQUFNO1lBQ2IsSUFBSSxFQUFDLDBCQUEwQjtZQUMvQixjQUFjLEVBQUMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsVUFBVTtTQUM5RCxDQUFDLENBQUE7SUFDTixDQUFDO0lBTmUsaUNBQWtCLHFCQU1qQyxDQUFBO0FBQ0wsQ0FBQyxFQW5FZ0IsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFtRTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVudGFsIH0gZnJvbSBcIi4vcHJvdG9fZ2VuL3JlbnRhbC9yZW50YWxfcGJcIjtcclxuaW1wb3J0IHsgQ29vbGNhciB9IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFByb2ZpbGVTZXJ2aWNlIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maWxlKCk6UHJvbWlzZTxyZW50YWwudjEuSVByb2ZpbGU+IHtcclxuICAgICAgICByZXR1cm4gQ29vbGNhci5zZW5kUmVxdWVzdFdpdGhBdXRoUmV0cnkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIHBhdGg6Jy92MS9wcm9maWxlJyxcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6IHJlbnRhbC52MS5Qcm9maWxlLmZyb21PYmplY3RcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvZmlsZShyZXE6cmVudGFsLnYxLklJZGVudGl0eSk6UHJvbWlzZTxyZW50YWwudjEuSVByb2ZpbGU+IHtcclxuICAgICAgICByZXR1cm4gQ29vbGNhci5zZW5kUmVxdWVzdFdpdGhBdXRoUmV0cnkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBwYXRoOicvdjEvcHJvZmlsZScsXHJcbiAgICAgICAgICAgIGRhdGE6cmVxLFxyXG4gICAgICAgICAgICByZXNwTWFyc2hhbGxlcjogcmVudGFsLnYxLlByb2ZpbGUuZnJvbU9iamVjdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2ZpbGUoKTpQcm9taXNlPHJlbnRhbC52MS5JUHJvZmlsZT4ge1xyXG4gICAgICAgIHJldHVybiBDb29sY2FyLnNlbmRSZXF1ZXN0V2l0aEF1dGhSZXRyeSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDonREVMRVRFJyxcclxuICAgICAgICAgICAgcGF0aDonL3YxL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgICByZXNwTWFyc2hhbGxlcjogcmVudGFsLnYxLlByb2ZpbGUuZnJvbU9iamVjdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpbGVQaG90bygpOlByb21pc2U8cmVudGFsLnYxLklHZXRQcm9maWxlUGhvdG9SZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiBDb29sY2FyLnNlbmRSZXF1ZXN0V2l0aEF1dGhSZXRyeSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIkdFVFwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiL3YxL3Byb2ZpbGUvcGhvdG9cIixcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6cmVudGFsLnYxLkdldFByb2ZpbGVQaG90b1Jlc3BvbnNlLmZyb21PYmplY3QsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZmlsZVBob3RvKCk6UHJvbWlzZTxyZW50YWwudjEuSUNyZWF0ZVByb2ZpbGVQaG90b1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIENvb2xjYXIuc2VuZFJlcXVlc3RXaXRoQXV0aFJldHJ5KHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgICAgICBwYXRoOlwiL3YxL3Byb2ZpbGUvcGhvdG9cIixcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6cmVudGFsLnYxLkNyZWF0ZVByb2ZpbGVQaG90b1Jlc3BvbnNlLmZyb21PYmplY3QsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY29tcGxldGVQcm9maWxlUGhvdG8oKTpQcm9taXNlPHJlbnRhbC52MS5JSWRlbnRpdHk+IHtcclxuICAgICAgICByZXR1cm4gQ29vbGNhci5zZW5kUmVxdWVzdFdpdGhBdXRoUmV0cnkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHBhdGg6XCIvdjEvcHJvZmlsZS9waG90by9jb21wbGV0ZVwiLFxyXG4gICAgICAgICAgICByZXNwTWFyc2hhbGxlcjpyZW50YWwudjEuSWRlbnRpdHkuZnJvbU9iamVjdCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2ZpbGVQaG90bygpOlByb21pc2U8cmVudGFsLnYxLklDbGVhclByb2ZpbGVQaG90b1Jlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIENvb2xjYXIuc2VuZFJlcXVlc3RXaXRoQXV0aFJldHJ5KHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHBhdGg6XCIvdjEvcHJvZmlsZS9waG90b1wiLFxyXG4gICAgICAgICAgICByZXNwTWFyc2hhbGxlcjpyZW50YWwudjEuQ2xlYXJQcm9maWxlUGhvdG9SZXNwb25zZS5mcm9tT2JqZWN0LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZFByb2ZpbGVQaG90bygpOlByb21pc2U8cmVudGFsLnYxLklVcGxvYWRGaWxlUGhvdG9SZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiBDb29sY2FyLnNlbmRSZXF1ZXN0V2l0aEF1dGhSZXRyeSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgcGF0aDpcIi92MS9wcm9maWxlL3Bob3RvL3VwbG9hZFwiLFxyXG4gICAgICAgICAgICByZXNwTWFyc2hhbGxlcjpyZW50YWwudjEuVXBsb2FkRmlsZVBob3RvUmVzcG9uc2UuZnJvbU9iamVjdCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19