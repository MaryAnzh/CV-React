import { SIDEBAR_MAP } from './constants';
import { SidebarItem } from './SidebarItem';
import * as S from './styled';

export const Sidebar = ({ ...rest }) => {
    return (
        <S.SidebarWrap {...rest}>
            {SIDEBAR_MAP.map(props => (
                <SidebarItem key={props.name} {...props} />
            ))}
        </S.SidebarWrap>
    );
}