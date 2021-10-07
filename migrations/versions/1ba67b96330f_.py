"""empty message

Revision ID: 1ba67b96330f
Revises: fef4a845269d
Create Date: 2021-10-07 17:34:47.890879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1ba67b96330f'
down_revision = 'fef4a845269d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_following', sa.Column('follower_id', sa.Integer(), nullable=True))
    op.add_column('user_following', sa.Column('followed_id', sa.Integer(), nullable=True))
    op.drop_constraint('user_following_user_id_fkey', 'user_following', type_='foreignkey')
    op.drop_constraint('user_following_following_id_fkey', 'user_following', type_='foreignkey')
    op.create_foreign_key(None, 'user_following', 'user', ['follower_id'], ['id'])
    op.create_foreign_key(None, 'user_following', 'user', ['followed_id'], ['id'])
    op.drop_column('user_following', 'following_id')
    op.drop_column('user_following', 'user_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_following', sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('user_following', sa.Column('following_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'user_following', type_='foreignkey')
    op.drop_constraint(None, 'user_following', type_='foreignkey')
    op.create_foreign_key('user_following_following_id_fkey', 'user_following', 'user', ['following_id'], ['id'])
    op.create_foreign_key('user_following_user_id_fkey', 'user_following', 'user', ['user_id'], ['id'])
    op.drop_column('user_following', 'followed_id')
    op.drop_column('user_following', 'follower_id')
    # ### end Alembic commands ###
