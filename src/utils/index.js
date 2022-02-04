const mapDBToModel = ({
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  title,
  year,
  genre,
  performer,
  duration,
  albumid: albumId,
});

module.exports = { mapDBToModel };