import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
    }

    a {
        color: ${({ theme }) => theme.text};
    }
    p,h1,h2,h3, span {
        color: ${({ theme }) => theme.text};
    }

    .headerNavigation__navigation__button, .home__mainSection__description__buttons button, .photoGalleryCard__scrollToTop {
        background: ${({ theme }) => theme.buttonBackground};
        border: ${({ theme }) => theme.buttonBorder};
    }

    .headerNavigation__navigation__settings button {
        color: ${({ theme }) => theme.text};
    }

    .headerNavigation__navigation__settings {
        border-left: solid 2px ${({ theme }) => theme.buttonBorderWhite};
        border-right: solid 2px ${({ theme }) => theme.buttonBorderWhite};
    }

    .headerNavigation__logo__icon {
        color: ${({ theme }) => theme.colorLogo};
    }

    .home__mainSection__description__buttons__link, .coctail__header__form__button {
        border: solid 2px ${({ theme }) => theme.buttonBorder};
        color: ${({ theme }) => theme.buttonBorder};
    }

    .coctail__header__form__search {
        background:${({ theme }) => theme.inputBackground};
        color: ${({ theme }) => theme.text};
    }

    .headerNavigation {
        background:${({ theme }) => theme.headerBackground}  no-repeat;

    }

    body::-webkit-scrollbar-thumb, textarea::-webkit-scrollbar-thumb, .coctailDetails__container__card::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.scrollBackgroundThumb};
        border: 2px solid ${({ theme }) => theme.scrollBorderThumb};
    }

    body::-webkit-scrollbar-track, textarea::-webkit-scrollbar-track, .coctailDetails__container__card::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.scrollBackgroundTrack};
    }

    .coctailDetails__container__card h1, .coctailDetails__container__card__preparation__rowTitle, .coctailDetails__container__card__properties__box p:nth-child(1)  {
        color: ${({ theme }) => theme.buttonBackground};
    }

    .coctailDetails__container__card__properties__box {
        background-color: ${({ theme }) => theme.coctailDetailsCategoryBG};
        border: 2px solid ${({ theme }) => theme.buttonBorder};
    }
`;
