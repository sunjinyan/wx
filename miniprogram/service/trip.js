"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripService = void 0;
const rental_pb_1 = require("./proto_gen/rental/rental_pb");
const request_1 = require("./request");
var TripService;
(function (TripService) {
    function createTrip(req) {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'POST',
            path: '/v1/trip',
            data: req,
            respMarshaller: rental_pb_1.rental.v1.TripEntity.fromObject,
        });
    }
    TripService.createTrip = createTrip;
    function GetTrip(id) {
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'GET',
            path: `/v1/trip/${encodeURIComponent(id)}`,
            respMarshaller: rental_pb_1.rental.v1.Trip.fromObject
        });
    }
    TripService.GetTrip = GetTrip;
    function GetTrips(s) {
        let path = '/v1/trips';
        if (s) {
            path += `?status=${s}`;
        }
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'GET',
            path,
            respMarshaller: rental_pb_1.rental.v1.GetTripsResponse.fromObject
        });
    }
    TripService.GetTrips = GetTrips;
    function updateTripPos(id, loc) {
        return updateTrip({
            id,
            current: loc,
        });
    }
    TripService.updateTripPos = updateTripPos;
    function finishTrip(id) {
        return updateTrip({
            id,
            endTrip: true
        });
    }
    TripService.finishTrip = finishTrip;
    function updateTrip(r) {
        if (!r.id) {
            return Promise.reject("must specify id");
        }
        return request_1.Coolcar.sendRequestWithAuthRetry({
            method: 'PUT',
            path: `/v1/trip/${encodeURIComponent(r.id)}`,
            data: r,
            respMarshaller: rental_pb_1.rental.v1.Trip.fromObject
        });
    }
    TripService.updateTrip = updateTrip;
})(TripService = exports.TripService || (exports.TripService = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBQXNEO0FBQ3RELHVDQUFvQztBQUVwQyxJQUFpQixXQUFXLENBd0QzQjtBQXhERCxXQUFpQixXQUFXO0lBQ3hCLFNBQWdCLFVBQVUsQ0FBQyxHQUFpQztRQUN4RCxPQUFPLGlCQUFPLENBQUMsd0JBQXdCLENBQUM7WUFDcEMsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsR0FBRztZQUNULGNBQWMsRUFBRSxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVTtTQUNsRCxDQUFDLENBQUE7SUFDTixDQUFDO0lBUGUsc0JBQVUsYUFPekIsQ0FBQTtJQUVELFNBQWdCLE9BQU8sQ0FBQyxFQUFTO1FBQzdCLE9BQU8saUJBQU8sQ0FBQyx3QkFBd0IsQ0FBQztZQUNwQyxNQUFNLEVBQUMsS0FBSztZQUNaLElBQUksRUFBQyxZQUFZLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLGNBQWMsRUFBQyxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUMzQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBTmUsbUJBQU8sVUFNdEIsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBQyxDQUF1QjtRQUM1QyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUE7UUFDdEIsSUFBSSxDQUFDLEVBQUU7WUFDSCxJQUFJLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQTtTQUN6QjtRQUNELE9BQU8saUJBQU8sQ0FBQyx3QkFBd0IsQ0FBQztZQUNwQyxNQUFNLEVBQUMsS0FBSztZQUNaLElBQUk7WUFDSixjQUFjLEVBQUMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtTQUN2RCxDQUFDLENBQUE7SUFDTixDQUFDO0lBVmUsb0JBQVEsV0FVdkIsQ0FBQTtJQUVELFNBQWdCLGFBQWEsQ0FBQyxFQUFTLEVBQUMsR0FBd0I7UUFDNUQsT0FBTyxVQUFVLENBQUM7WUFDZCxFQUFFO1lBQ0YsT0FBTyxFQUFDLEdBQUc7U0FDZCxDQUFDLENBQUE7SUFDTixDQUFDO0lBTGUseUJBQWEsZ0JBSzVCLENBQUE7SUFFRCxTQUFnQixVQUFVLENBQUMsRUFBVTtRQUNqQyxPQUFPLFVBQVUsQ0FBQztZQUNkLEVBQUU7WUFDRixPQUFPLEVBQUMsSUFBSTtTQUNmLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFMZSxzQkFBVSxhQUt6QixDQUFBO0lBRUQsU0FBZ0IsVUFBVSxDQUFDLENBQStCO1FBQ3RELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDM0M7UUFDRCxPQUFPLGlCQUFPLENBQUMsd0JBQXdCLENBQUM7WUFDcEMsTUFBTSxFQUFDLEtBQUs7WUFDWixJQUFJLEVBQUMsWUFBWSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxFQUFDLENBQUM7WUFDTixjQUFjLEVBQUMsa0JBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVU7U0FDM0MsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQVZlLHNCQUFVLGFBVXpCLENBQUE7QUFFTCxDQUFDLEVBeERnQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQXdEM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW50YWwgfSBmcm9tIFwiLi9wcm90b19nZW4vcmVudGFsL3JlbnRhbF9wYlwiO1xyXG5pbXBvcnQgeyBDb29sY2FyIH0gZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBUcmlwU2VydmljZXtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlwKHJlcTogcmVudGFsLnYxLklDcmVhdGVUcmlwUmVxdWVzdCk6IFByb21pc2U8cmVudGFsLnYxLklUcmlwRW50aXR5PiB7XHJcbiAgICAgICAgcmV0dXJuIENvb2xjYXIuc2VuZFJlcXVlc3RXaXRoQXV0aFJldHJ5KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvdjEvdHJpcCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcSxcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6IHJlbnRhbC52MS5UcmlwRW50aXR5LmZyb21PYmplY3QsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0VHJpcChpZDpzdHJpbmcpOlByb21pc2U8cmVudGFsLnYxLklUcmlwPiB7XHJcbiAgICAgICAgcmV0dXJuIENvb2xjYXIuc2VuZFJlcXVlc3RXaXRoQXV0aFJldHJ5KHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICBwYXRoOmAvdjEvdHJpcC8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YCxcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6cmVudGFsLnYxLlRyaXAuZnJvbU9iamVjdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldFRyaXBzKHM/OnJlbnRhbC52MS5UcmlwU3RhdHVzKTpQcm9taXNlPHJlbnRhbC52MS5JR2V0VHJpcHNSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBwYXRoID0gJy92MS90cmlwcydcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICBwYXRoICs9IGA/c3RhdHVzPSR7c31gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb29sY2FyLnNlbmRSZXF1ZXN0V2l0aEF1dGhSZXRyeSh7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgcmVzcE1hcnNoYWxsZXI6cmVudGFsLnYxLkdldFRyaXBzUmVzcG9uc2UuZnJvbU9iamVjdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRyaXBQb3MoaWQ6c3RyaW5nLGxvYz86cmVudGFsLnYxLklMb2NhdGlvbikge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVUcmlwKHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6bG9jLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaFRyaXAoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVUcmlwKHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGVuZFRyaXA6dHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRyaXAocjogcmVudGFsLnYxLklVcGRhdGVUcmlwUmVxdWVzdCk6UHJvbWlzZTxyZW50YWwudjEuSVRyaXA+e1xyXG4gICAgICAgIGlmICghci5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJtdXN0IHNwZWNpZnkgaWRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvb2xjYXIuc2VuZFJlcXVlc3RXaXRoQXV0aFJldHJ5KHtcclxuICAgICAgICAgICAgbWV0aG9kOidQVVQnLFxyXG4gICAgICAgICAgICBwYXRoOmAvdjEvdHJpcC8ke2VuY29kZVVSSUNvbXBvbmVudChyLmlkKX1gLFxyXG4gICAgICAgICAgICBkYXRhOnIsXHJcbiAgICAgICAgICAgIHJlc3BNYXJzaGFsbGVyOnJlbnRhbC52MS5UcmlwLmZyb21PYmplY3RcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdfQ==