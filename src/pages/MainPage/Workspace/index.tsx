import { WORKSPACE } from '~constants';
import { Typography } from '~components';

import * as S from './styled';

export const Workspace = () => {
    return (
        <S.WorkspaceWrap>
            <Typography>
                {WORKSPACE}
            </Typography>
        </S.WorkspaceWrap>
    );
}
