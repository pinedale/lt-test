import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPeoples } from '../../actions/people';
import { compose, last, split } from 'ramda';

const SwapiList = ({ getPeoples, peoples, next, previous, setSelectedName }) => {
  const { page } = useParams();
	const nextPage = next ? compose(last, split('?page='))(next) : null;
	const previousPage = previous ? compose(last, split('?page='))(previous) : null;

	const onClickHandle = (name) =>{
		localStorage.setItem('selectedName', name);
		setSelectedName(name);
	}

	
	useEffect(() => {
    getPeoples({ page });
  }, [page]);

  return (
    <>
      <ul class="list-people">
        {peoples?.map((people) => {
          return (
            <li><button onClick= {() => onClickHandle(people.name)}>{people.name}</button></li>
          );
        })}
      </ul>
			{previousPage ? <Link to={`/people/${previousPage}`}>Previous</Link> : null}
			{nextPage ?  <Link to={`/people/${nextPage}`}>Next</Link> : null}
      
    </>
  );
};

const mapStateToProps = (state) => {
  const { people: { peoples, next, previous } } = state;
  return { peoples, next, previous };
};

const mapDispatchToProps = { getPeoples };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwapiList);
