import React, { useEffect, useState } from 'react';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Wrapper, GroupWrapper, TitleWrapper } from 'views/Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import StudentsDetails from 'components/molecules/StudentsDetails/StudentsDetails';
import { DispalyEventsData, DisplayEvents } from 'hoc/withEventsData';
import EventsProvider from 'providers/EventsProvider';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups, getStudentsById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              group {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentsDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
      <EventsProvider group="A">{(props) => <DisplayEvents events={props} />}</EventsProvider>
    </Wrapper>
  );
};

export default Dashboard;
