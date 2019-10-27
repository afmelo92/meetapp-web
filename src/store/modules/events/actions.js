export function meetupRequest(
  host_id,
  banner_id,
  title,
  description,
  date,
  location,
  meetup_id
) {
  return {
    type: '@events/MEETUP_REQUEST',
    payload: {
      host_id,
      banner_id,
      title,
      description,
      date,
      location,
      meetup_id,
    },
  };
}

export function deleteRequest(meetup_id) {
  return {
    type: '@events/DELETE_REQUEST',
    payload: { meetup_id },
  };
}
