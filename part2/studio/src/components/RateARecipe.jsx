const stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    return props.rating >= 1 && props.rating <= 5 ? <h3>{stars[props.rating - 1]}</h3> : null;
  }

  return <GiveRating />;
}

export default RateARecipe;
