import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserContext } from '~/Context/User';

import Loading from '~/Screens/Loading';

import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'MOVIEAPP',
                    headerTransparent: true,
                    headerTintColor: '#E70915',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};
//로그인 화면에는 로그인 기능뿐만 아니라 회원가입 화면도 존재할 수 있다. 
//이번 영화 소개 앱에서는 회원가입 화면은 만들지 않았지만, 확장성을 위해 Login화면을 createStackNavigator를 사용하여 내비게이션 기능을 추가했다

const MovieNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MovieHome"
                component={MovieHome}
                options={{
                    title: 'MOVIEAPP',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{
                    title: 'MOVIEAPP',
                    headerTintColor: '#E70915',
                    headerStyle: {
                        backgroundColor: '#141414',
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};
//Stack Navigation을 사용하기 위해서는 createStackNavigator을 사용해야한다
//영화 리스트 화면에서 영화를 선택하면 영화의 상세 페이지를 보여주기 위해 사용할 예정
//이 내비게이션은 영화 리스트 화면 위에 상세 페이지 화면을 쌓아서(stack) 표시한다.
export default () => {
    const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

    if (isLoading === false) {
        return <Loading />;
    }
    return (
        <NavigationContainer>
            {userInfo ? <MovieNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    );
    //Loding컴포넌트를 활요하는 부분
    //로그인 여부를 확인하기 위해 userContext에서 서버와 통신하는 사이에 이 컴포넌트를
    //활용하여 로딩 중임을 표시하였다. 서버에서 응답을 받으면 isLoading이 true로 변경되고
    //사용자 정보가 있으면 MovieNavigator를 사용자 정보가 없으면 LoginNavigator를 표시하였다.
    //하지만 이번예제는 서버와 통신하지않음
};
//로그인, 로그아웃, 로그인 여부를 확인하기 위해 Context API를 사용할 예정
//로그인 여부를 확인하는 동안 화면에는 Loading 화면을 표시하고 만약 로그인을 하였다면 MovieNavigator를 
//로그인을 하지 않았다면 LoginNavigator를 표시할 예정 
