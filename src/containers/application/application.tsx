import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/header';
import { Logotype } from '@/components/logotype';
import { Navigation } from '@/components/navigation';
import { Widgets } from '@/components/widgets';
import { Main } from '@/components/main';
import { Dashboard } from '@/containers/dashboard';
import { useI18n } from '@/hooks/use-i18n';
import { store } from '@/store';
import type { ApplicationComponent } from './application.types';

export const Application: ApplicationComponent = () => {
  const i18n = useI18n();

  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Header>
            <Logotype href='/' />

            <Navigation>
              <Navigation.Link
                href='/'
                label={i18n.HEADER_NAVIGATION_LINK_HOME}
              />

              <Navigation.Link
                href='/events'
                label={i18n.HEADER_NAVIGATION_LINK_EVENTS}
              />

              <Navigation.Link label={i18n.HEADER_NAVIGATION_LINK_HELP}>
                <menu />
              </Navigation.Link>
            </Navigation>

            <Widgets>
              <Widgets.Notifications />

              <Widgets.Profile
                src={'/profile.jpg'}
                alt={i18n.HEADER_WIDGETS_PROFILE_ALT}
              />
            </Widgets>
          </Header>

          <Main>
            <Routes>
              <Route path='/' Component={Dashboard} />
              <Route path='/events' />
              {/* TODO: Do we need a 404 page? Maybe we are supposed to redirect to home page instead?.. */}
            </Routes>
          </Main>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};
