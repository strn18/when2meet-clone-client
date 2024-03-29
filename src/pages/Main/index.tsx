import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

export function MainPage() {
  const [eventName, setEventName] = useState<string>();
  const [date, setDate] = useState<string>();
  const [dates, setDates] = useState<Date[]>([]);
  const [beginTime, setBeginTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();

  const navigate = useNavigate();

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  };

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleDates = () => {
    if (date) setDates([...dates, new Date(date)]);
  };

  const handleBeginTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setBeginTime(parseInt(event.target.value, 10));
  };

  const handleEndTime = (event: ChangeEvent<HTMLSelectElement>) => {
    setEndTime(parseInt(event.target.value, 10));
  };

  async function createEvent() {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/event`, {
        dates,
        begin: beginTime,
        end: endTime,
        eventName,
      });

      if (response.status !== 201) throw new Error();

      navigate(`/${response.data.url}`);
    } catch (error) {
      console.error('Fail to create event');
    }
  }

  /**
   * 백엔드 서버에 요청을 보내서 유저 정보를 가져오는 함수입니다.
   * 이런 api호출하는데 axios 라이브러리를 많이 사용합니다.
   * 서버와 통신하는데 시간이 걸리기 때문에 비동기 함수(async)로 선언했습니다.
   * 비동기 함수는 항상 try-catch문으로 감싸주는 것이 좋습니다. (에러가 발생할 수 있기 때문에)
   */
  // async function getUser() {
  //   try {
  //     /**
  //      * process.env 는 환경변수를 의미합니다
  //      * .env 파일에 REACT_APP_API_URL 이라는 변수를 선언했기 때문에 이런식으로 불러올 수 있습니다.
  //      * 실행되는 환경(개발이냐 라이브냐)에 따라 달라지는 값이거나, 보안이 필요한 값들은 .env 파일에 넣어두고 불러와서 사용합니다.
  //      * .env 파일은 git에 올라가지 않습니다.(지금은 교육용으로 올려놨습니다)
  //      * .env 파일은 .gitignore에 등록되어 있습니다.
  //      *
  //      * axios.get()은 여러 값들을 반환하지만, 우리는 data, status만 사용할 것입니다.
  //      * data라는 이름은 너무 추상적이기 때문에 userResponse라는 이름으로 사용합니다.
  //      */
  //     const { data: userResponse, status } = await axios.get(`${process.env.REACT_APP_API_URL}/user?id=1`);
  //     if (status === 200) {
  //       /**
  //        * status가 200이라는 것은 서버로부터 제대로 데이터를 받아왔다는 것이므로, 우리는 user 상태를 업데이트해줍니다.
  //        */
  //       setUser(userResponse);
  //     } else {
  //       // 실패한 경우, 에러를 발생시킵니다.
  //       // 이러면 아래의 catch문으로 넘어갑니다.
  //       throw new Error();
  //     }
  //   } catch {
  //     /**
  //      * 모종의 이유로 api 호출에 실패한 경우, 에러를 콘솔에 출력합니다. (실제 사용자에게는 보이지 않습니다.)
  //      */
  //     console.error('유저 정보를 가져오는데 실패했습니다.');
  //   }
  // }

  /**
   * useEffect는 컴포넌트가 렌더링 될 때마다 실행되는 함수입니다.
   * 두번째 인자로 빈 배열을 넣어주면, 컴포넌트가 처음 렌더링 될 때만 실행됩니다.
   * 이런식으로 사용하면, 컴포넌트가 처음 렌더링 될 때만 실행되는 코드를 작성할 수 있습니다.
   * (처음 렌더링 될 때만 실행되는 코드는 보통 api 호출 코드입니다.) -> api 호출은 렌더링된 후 딱 한 번만 실행해야 합니다.
   * api 호출하는 액션 자체만으로 프론트나 백엔드나 성능이 저하됩니다.
   *
   * deps(=의존성) 배열이 빈 배열이므로 첫 렌더링 때만 실행됩니다.
   * 만약 의존성 배열에 어떠한 변수나 상태를 넣어주면, 해당 변수나 상태가 변경될 때마다 실행됩니다. -> 상황에 따라 유용하게 사용할 수 있습니다.
   */
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} padding={'10px'}>
      <Box display={'flex'} justifyContent={'center'} marginY={'20px'}>
        <input
          type="text"
          value={eventName}
          onChange={handleEventName}
          placeholder="New Event Name"
          maxLength={128}
          style={{ textAlign: 'center', fontSize: '22px' }}
        />
      </Box>
      <Box display={'flex'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{ width: '50%', backgroundColor: 'skyblue' }}
        >
          <Typography variant="body1">What dates might work?</Typography>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginY={1}>
            <Typography variant="body2">Click and drag dates to choose possibilities.</Typography>
            <Typography variant="body2">Scroll labels to shift the calendar.</Typography>
          </Box>
          <input type="date" onChange={handleDate} />
          <button onClick={handleDates}>Push</button>
          {dates.map((date1) => (
            <p>{date1.toLocaleString()}</p>
          ))}
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{ width: '50%', backgroundColor: 'pink' }}
        >
          <Typography variant="body1">What times might work?</Typography>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginY={4}>
            <Box marginY={0.5}>
              <Typography variant="body2" display={'inline'}>
                {'No earlier than: '}
              </Typography>
              <select value={beginTime} onChange={handleBeginTime}>
                {[0, 1, 2].map((n) => (
                  <option value={n}>{`${n}:00 AM`}</option>
                ))}
              </select>
            </Box>
            <Box marginY={0.5}>
              <Typography variant="body2" display={'inline'}>
                {'No later than: '}
              </Typography>
              <select value={endTime} onChange={handleEndTime}>
                {[0, 1, 2].map((n) => (
                  <option value={n}>{`${n}:00 AM`}</option>
                ))}
              </select>
            </Box>
          </Box>
          <button onClick={createEvent}>Create Event</button>
          <button onClick={() => navigate('/vote/YD5ZB')}>투표창으로 가는 버튼</button>
        </Box>
      </Box>
    </Box>
  );
}
