

export const NavWrapper = styled.nav`
    background-color: #010203;
    min-height: 60px;
    width: 100%;
    display: flex;
`;

export const NavIcon = styled.div`
    background-image: url(${props => props.src});
`;